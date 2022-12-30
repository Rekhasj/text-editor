import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {Button, TextArea} from './styledComponents'
import './index.css'

class TextEditor extends Component {
  state = {
    isBoldActive: false,
    isItalicActive: false,
    isUnderlineActive: false,
    textAreaInput: '',
  }

  onChangeInput = event => {
    this.setState({textAreaInput: event.target.value})
  }

  onClickBoldButton = () => {
    const {isBoldActive} = this.state
    this.setState({isBoldActive: !isBoldActive})
  }

  onClickItalicButton = () => {
    const {isItalicActive} = this.state
    this.setState({isItalicActive: !isItalicActive})
  }

  onClickUnderlineButton = () => {
    const {isUnderlineActive} = this.state
    this.setState({isUnderlineActive: !isUnderlineActive})
  }

  render() {
    const {
      isBoldActive,
      isItalicActive,
      isUnderlineActive,
      textAreaInput,
    } = this.state

    const boldColor = isBoldActive ? '#faff00' : '#f1f5f9'
    const italicColor = isItalicActive ? '#faff00' : '#f1f5f9'
    const underlineColor = isUnderlineActive ? '#faff00' : '#f1f5f9'

    return (
      <div className="main-container">
        <div className="main-card">
          <div className="text-editor-card">
            <h1 className="heading">Text Editor</h1>
            <img
              alt="text editor"
              className="text-editor-image"
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            />
          </div>
          <div className="input-card">
            <ul className="icon-card">
              <li>
                <Button
                  onClick={this.onClickBoldButton}
                  type="button"
                  data-testid="bold"
                  textColor={boldColor}
                >
                  <VscBold size={25} />
                </Button>
              </li>
              <li>
                <Button
                  onClick={this.onClickItalicButton}
                  type="button"
                  data-testid="italic"
                  textColor={italicColor}
                >
                  <GoItalic size={25} />
                </Button>
              </li>
              <li>
                <Button
                  onClick={this.onClickUnderlineButton}
                  type="button"
                  data-testid="underline"
                  textColor={underlineColor}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </li>
            </ul>
            <TextArea
              isBoldActive={isBoldActive}
              isItalicActive={isItalicActive}
              isUnderlineActive={isUnderlineActive}
              onChange={this.onChangeInput}
              placeholder={textAreaInput}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default TextEditor
