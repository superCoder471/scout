import {
    FormField,
    FormInputDescription,
    FormInputNumber,
    FormInputText,
    FormInputTitle,
    FormInputToggle,
    InputLabel,
} from "@/components/ui/form"
import { FormPageInterface } from "../formConfig"
import { Paragraph } from "@/components/ui/paragraph"
import { Heading } from "@/components/ui/heading"
import { Dot } from "lucide-react"

const Auto2025 = ({ handleChange, formChanges }: FormPageInterface) => {
    return (
        <>
            <FormField>
                <FormInputNumber
                    incrementButton
                    onChange={(e) =>
                        handleChange(
                            "auto.coralL4",
                            parseInt(e.currentTarget.value)
                        )
                    }
                    defaultValue={formChanges.auto?.coralL4}
                />
                <InputLabel>Coral Scored in L4</InputLabel>
            </FormField>
            <FormField>
                <FormInputNumber
                    incrementButton
                    onChange={(e) =>
                        handleChange(
                            "auto.coralL3",
                            parseInt(e.currentTarget.value)
                        )
                    }
                    defaultValue={formChanges.auto?.coralL3}
                />
                <InputLabel>Coral Scored in L3</InputLabel>
            </FormField>
            <FormField>
                <FormInputNumber
                    incrementButton
                    onChange={(e) =>
                        handleChange(
                            "auto.coralL2",
                            parseInt(e.currentTarget.value)
                        )
                    }
                    defaultValue={formChanges.auto?.coralL2}
                />
                <InputLabel>Coral Scored in L2</InputLabel>
            </FormField>

            <FormField>
                <FormInputNumber
                    incrementButton
                    onChange={(e) =>
                        handleChange(
                            "auto.coralStow",
                            parseInt(e.currentTarget.value)
                        )
                    }
                    defaultValue={formChanges.auto?.coralStow}
                />
                <InputLabel>
                    Coral Scored in Trough <span className="text-xs">L1</span>
                </InputLabel>
            </FormField>
        </>
    )
}

const StartLogInfo2025 = ({ handleChange, formChanges }: FormPageInterface) => {
    return (
        <>
            <FormField>
                <FormInputNumber
                    onChange={(e) =>
                        handleChange(
                            "match",
                            parseInt(e.currentTarget.value) || undefined
                        )
                    }
                    defaultValue={formChanges.match}
                    required
                />
                <InputLabel>Match</InputLabel>
            </FormField>

            <FormField>
                <FormInputNumber
                    onChange={(e) =>
                        handleChange(
                            "team",
                            parseInt(e.currentTarget.value) || undefined
                        )
                    }
                    defaultValue={formChanges.team}
                    required
                />
                <InputLabel>Team</InputLabel>
            </FormField>

            <FormField>
                <FormInputText
                    onChange={(e) =>
                        handleChange("scout", e.currentTarget.value)
                    }
                    defaultValue={formChanges.scout}
                />
                <InputLabel>Scouter Name</InputLabel>
            </FormField>
        </>
    )
}

const Teleop2025 = ({ handleChange, formChanges }: FormPageInterface) => {
    return (
        <>
            <Paragraph>Coral Scored</Paragraph>

            <div className="mb-2 flex flex-col gap-2">
                <FormField>
                    <FormInputNumber
                        incrementButton
                        onChange={(e) =>
                            handleChange(
                                "teleop.coralL4",
                                parseInt(e.currentTarget.value)
                            )
                        }
                        defaultValue={formChanges.teleop?.coralL4}
                    />
                    <InputLabel>Coral Scored in L4</InputLabel>
                </FormField>
                <FormField>
                    <FormInputNumber
                        incrementButton
                        onChange={(e) =>
                            handleChange(
                                "teleop.coralL3",
                                parseInt(e.currentTarget.value)
                            )
                        }
                        defaultValue={formChanges.teleop?.coralL3}
                    />
                    <InputLabel>Coral Scored in L3</InputLabel>
                </FormField>
                <FormField>
                    <FormInputNumber
                        incrementButton
                        onChange={(e) =>
                            handleChange(
                                "teleop.coralL2",
                                parseInt(e.currentTarget.value)
                            )
                        }
                        defaultValue={formChanges.teleop?.coralL2}
                    />
                    <InputLabel>Coral Scored in L2</InputLabel>
                </FormField>

                <FormField>
                    <FormInputNumber
                        incrementButton
                        onChange={(e) =>
                            handleChange(
                                "teleop.coralStow",
                                parseInt(e.currentTarget.value)
                            )
                        }
                        defaultValue={formChanges.teleop?.coralStow}
                    />
                    <InputLabel>Coral Scored in Stow</InputLabel>
                </FormField>
            </div>

            <FormField>
                <FormInputNumber
                    onChange={(e) =>
                        handleChange(
                            "teleop.algae",
                            parseInt(e.currentTarget.value)
                        )
                    }
                    defaultValue={formChanges.teleop?.algae}
                />
                <InputLabel>Algae Processed</InputLabel>
            </FormField>

            <FormField>
                <FormInputNumber
                    onChange={(e) =>
                        handleChange(
                            "teleop.algae",
                            parseInt(e.currentTarget.value)
                        )
                    }
                    defaultValue={formChanges.teleop?.net}
                />
                <InputLabel>Algae Thrown in Net</InputLabel>
            </FormField>
        </>
    )
}

const Finishing2025 = ({}: FormPageInterface) => {
    return <></>
}

export { StartLogInfo2025, Auto2025, Teleop2025, Finishing2025 }
