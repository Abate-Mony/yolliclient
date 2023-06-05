import { useState, useEffect } from 'react'

const Write = () => {
    const [text, setText] = useState("Hi ,I am Ramatou Yoland ,")

    useEffect(() => {
        const _text = "Hi ,I am Ramatou Yoland Bintu ,I am a Pro  Web developer/full stackdeveloper"
        var i = 0
        const time = setInterval(() => {
          const temp = _text.slice(0, Math.abs(i))
          setText(temp)
          i > _text.length - 1 ? i *= -1 : i += 1
        }, 100)
        return () => {
          clearInterval(time)
        }
      }, [])
    return (

        <h1 className=" break-words px-4 md:px-6 lg:px-10
inline-block w-full text-dark font-bold capitalize !text-3xl md:!text-4xl lg:!text-6xl md:text-left
">{text} </h1>
    )

}
export default Write