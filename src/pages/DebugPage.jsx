import { useState } from "react";
import BaseButton from "../components/BaseButton";
import BaseTextField from "../components/BaseTextField";

export default function DebugPage() {
    const [textFieldValue, setTextFieldValue] = useState("")

    return (
        <div className="flex flex-col gap-20 bg-brand-inv w-screen min-h-screen p-32">
            <div className="flex flex-row gap-16">
                <BaseButton 
                    title={"Primary"} 
                    action={() => debugAction("Button Primary")}
                />

                <BaseButton 
                    title={"Secondary"} 
                    action={() => debugAction("Button Secondary")}
                    prominence="secondary"
                />

                <BaseButton 
                    title={"Tertiary"} 
                    action={() => debugAction("Button Tertiary")}
                    prominence="tertiary"
                />

                <BaseButton 
                    title={"Full Width"} 
                    action={() => debugAction("Button Full Width")}
                    isFullWidth={true}
                />
            </div>

            <div className="flex flex-row gap-16">
                <BaseTextField 
                    title={"Normal Password"}
                    type={"password"}
                    placeholder={"example@email.com"}
                    value={textFieldValue}
                    onValueChanged={setTextFieldValue}
                    onSubmit={() => debugAction(textFieldValue)}
                    isError={true}
                    helperText={"This is an error state."}
                />

                <BaseTextField 
                    title={"Full Submit"}
                    placeholder={"example@email.com"}
                    value={textFieldValue}
                    onValueChanged={setTextFieldValue}
                    onSubmit={() => debugAction(textFieldValue)}
                    isFullWidth={true}
                    showSendButton={true}
                    isRequired={true}
                    helperText={"Min. 5 characters"}
                />
            </div>
        </div>
    );
}

function debugAction(text) {
    window.alert(`${text} was updated.`)
}