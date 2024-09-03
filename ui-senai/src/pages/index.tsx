import { Hello, primary50, primary950, primaryColor, secondaryColor } from "senai-design-system";

export default function Home() {
    return (
        <div>
            <Hello />
            <div style={{ backgroundColor: primary950, color: primary50 }}>
                <h1>Hello, world!</h1>
            </div>
        </div>
    );
}
