import React from "react"

export default class Topic extends React.Component {



  render() {
    const svar = this.props.answers.filter( x => {
      // console.log("X", x)
      return x.topicId === this.props.topicId
    })
    console.log("svarX", svar);

    return (
      <div>
        <h1>Question: {this.props.headline}</h1>
        <div>
          <p>{this.props.content}</p>
          <p>{this.props.name}</p>
          <h3>Answer:</h3>
          {svar.map( (x, index) => (

            <p>{x.answer}</p>
          ))}

        </div>
      </div>
    )
  }
}
