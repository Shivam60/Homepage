import { Button, Typography, TypographySize, TypographyTag } from "@microsoft/fast-components-react-msft";
import * as React from "react";
export interface IHomePageState {
    text: string;
}
export class HomePage extends React.Component<{}, IHomePageState> {
    private dishes: string[] = ["mutton", "chicken", "seekh kabab", "fish", "burgers", "biryani", "tandoori Chicken"];
    constructor(props: {}) {
        super(props);
        this.state = {
            text: "",
        };
    }
    public render() {
        return (
            <div style={{ display: "flex", position: "fixed", left: "45%" }}>
                <Button children={"What shall we have"} onClick={this.buttonClicked} />
                <Typography
                    tag={TypographyTag.h4}
                    children={"Lets have : " + this.state.text}
                    size={TypographySize._5}
                    style={{ marginInlineStart: "16px" }}
                />
            </div>
        );
    }

    private buttonClicked(): void {
        this.setState({
            text: this.dishes[Math.floor(Math.random() * 10) % this.dishes.length],
        });
    }
}
