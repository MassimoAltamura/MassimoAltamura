import { Button } from "./button"
export function AlertClock({ onButtonClick }) {
    function handleButtonClick() {
        const now = new Date();
        alert(`The current time is ${now.toLocaleTimeString()}`);
    }

    return (
        <div>
            <p>
                Click the button below to show the current time.
            </p>
            <Button onClick={onButtonClick || handleButtonClick} label="Click me" />
        </div>
    );
}