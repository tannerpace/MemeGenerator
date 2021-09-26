import React, { Component } from "react"
import RandomNumber from "./RandomNumber"
import { Button, Box, TextField, Input, IconButton } from '@mui/material';
class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                this.setState({ allMemeImgs: memes })
            })
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const myImg = { url: this.state.allMemeImgs[RandomNumber(100)].url }

        this.setState({ randomImg: myImg.url })
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <TextField
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <TextField
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />

                    <Button variant="contained" type="submit">Gen</Button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator