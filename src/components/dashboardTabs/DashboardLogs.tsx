import { Event } from "@/lib/types/eventType"
import { Button } from "../ui/button"
import { useEffect, useState, useMemo, useCallback } from "react"
import { LogElement } from "../LogElement"
import { getLogs } from "@/lib/getLogs"
import { Log, logConfig } from "../forms/formConfig"
import { FilterLogList } from "../FilterLogList"
import { useFormContext } from "@/lib/context/formContext"
import { ScoreBreakdown } from "../ScoreBreakdown"

const filterLogsAsTeams = (
    allLogs: Log<keyof typeof logConfig>[]
): { [key: number]: Log<keyof typeof logConfig>[] } => {
    const filteredTeamLogs: { [key: number]: Log<keyof typeof logConfig>[] } =
        {}

    allLogs.forEach((log) => {
        const team = log.team

        if (!filteredTeamLogs[team]) filteredTeamLogs[team] = []
        filteredTeamLogs[team].push(log)
    })

    return filteredTeamLogs
}

export type FilterButtonsType = {
    auto: (keyof Log<keyof typeof logConfig>["auto"])[]
    teleop: (keyof Log<keyof typeof logConfig>["teleop"])[]
}

export const DashboardLogs = ({ eventData }: { eventData: Event | null }) => {
    if (!eventData) return null

    const [renderList, setRenderList] = useState<boolean>(true)
    const { formIsOpen, setFormIsOpen } = useFormContext()

    const filteredLogsAsTeams = useMemo(
        () => filterLogsAsTeams(getLogs(eventData.match_logs)),
        [eventData.match_logs]
    )

    type Year = keyof typeof logConfig

    const [selectedFilters, setSelectedFilters] = useState<FilterButtonsType>({
        auto: [],
        teleop: [],
    })
    const [filteredLogs, setFilteredLogs] = useState<
        Record<number, Log<Year>[]>
    >({})

    const filterTeamsAndLogs = useCallback(
        (
            teamLogs: Record<number, Log<Year>[]>,
            selectedFilters: FilterButtonsType
        ): Record<number, Log<Year>[]> => {
            const filteredTeams: Record<number, Log<Year>[]> = {}

            for (const [team, logs] of Object.entries(teamLogs)) {
                const teamNumber = Number(team)

                const filteredLogs = logs.filter((log) => {
                    const autoMatches = selectedFilters.auto.every(
                        (key) =>
                            log.auto &&
                            log.auto[key] !== undefined &&
                            log.auto[key] !== false &&
                            log.auto[key] !== 0
                    )

                    const teleopMatches = selectedFilters.teleop.every(
                        (key) =>
                            log.teleop &&
                            log.teleop[key] !== undefined &&
                            log.teleop[key] !== false &&
                            log.teleop[key] !== 0
                    )

                    return autoMatches && teleopMatches
                })

                if (filteredLogs.length > 0) {
                    filteredTeams[teamNumber] = logs
                }
            }

            return filteredTeams
        },
        []
    )

    useEffect(() => {
        setFilteredLogs(
            filterTeamsAndLogs(filteredLogsAsTeams, selectedFilters)
        )
    }, [selectedFilters, filteredLogsAsTeams, filterTeamsAndLogs])

    const handleToggleRenderList = useCallback((value: boolean) => {
        setRenderList(value)
    }, [])

    return (
        <>
            <div className="flex justify-end gap-2">
                <Button
                    className={`${renderList ? "" : "dark:bg-neutral-300"}`}
                    onClick={() => handleToggleRenderList(false)}
                ></Button>
                <Button
                    className={`${renderList ? "dark:bg-neutral-300" : ""}`}
                    onClick={() => handleToggleRenderList(true)}
                ></Button>
            </div>

            <FilterLogList
                year={eventData.year as keyof typeof logConfig}
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
            />
            <div className="flex flex-col gap-2">
                {renderList
                    ? Object.entries(filteredLogs).map(([team, logs]) => {
                          return (
                              <ScoreBreakdown
                                  key={team}
                                  team={team}
                                  logs={logs}
                              />
                          )
                      })
                    : null}

                {!renderList
                    ? eventData.match_logs.map((log, i) => (
                          <LogElement key={i} logInfo={log} />
                      ))
                    : null}
            </div>

            <Button onClick={() => setFormIsOpen(!formIsOpen)}>Scout</Button>
        </>
    )
}
