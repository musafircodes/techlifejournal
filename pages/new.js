import { useState, useContext, useEffect } from 'react'
import Article from '../src/components/Article/ArticlePage'
import { MdDelete } from 'react-icons/md'
import { Heading } from './article/[name_id]'
import { AuthContext } from '../src/context/authContext'
import axios from 'axios'
import urls from '../backend.config'
import { useRouter } from 'next/router'
function New() {
    const history = useRouter()
    const [content, setContent] = useState({
        headline: "",
        content: "",
        Tags: [1]
    })
    const { userData } = useContext(AuthContext)
    const date = new Date()
    const [preview, setPreview] = useState(false)
    useEffect(() => {
        localStorage.getItem('post_content') && setContent(JSON.parse(localStorage.getItem('post_content')))
    }, [])
    const saveDraft = () => {
        localStorage.setItem('post_content', JSON.stringify(content))
        window.alert("saved✔️")
    }
    const handelSubmit = async () => {
        const res = await axios.post(`${urls.client_url}/api/article/send`, content)
        if (res.status == 200) {
            history.push('/user')
        }
    }
    return (
        <section>
            <div className=" py-20 px-4 md:py-28  max-w-4xl mx-auto min-h-screen">
                <div className=" shadow-lg  flex flex-col ">
                    <div className="bg-gray-50 dark:bg-opacity-10 border border-b-0 border-gray-300 top-0 left-0 right-0 block rounded-t-md">
                        <button onClick={() => { setPreview(false) }} type="button" className={`${!preview && "border-b-4"}  px-4  border-gray-300 inline-block  font-semibold border-r-1 py-3  hover:text-gray-400`} >
                            Write</button>
                        <button onClick={() => { setPreview(true) }} type="button" className={`${preview && "border-b-4 "} px-4 inline-block  font-semibold py-3 border-r-1 hover:text-gray-400`}>Preview</button>
                    </div>

                    <div>
                        <div className="p-5 border-1 ">
                            {!preview ?
                                <div className="">
                                    <input className="bg-transparent w-full   text-4xl  focus:outline-none py-4" value={content.headline} onChange={(e) => { setContent({ ...content, headline: e.target.value }) }} placeholder="Title Here..." />
                                    <textarea
                                        id="id"
                                        x-ref="input"
                                        name="content"
                                        className="h-56 lg:h-96 bg-transparent w-full focus:outline-none"
                                        placeholder="Write your article here..."
                                        value={content.content}
                                        onChange={(e) => { setContent({ ...content, content: e.target.value }) }}
                                    ></textarea>
                                </div> :
                                <div id="preview"
                                    className="w-full "
                                >
                                    <Heading data={{ headline: content.headline }} authors={[userData]} />
                                    <Article pageContent={content.content} />
                                </div>}
                        </div>
                    </div>
                    <div className="flex justify-between bg-gray-50 dark:bg-opacity-5 border border-t-0 border-gray-300  rounded-b-md text-white">
                        <div className=" flex gap-2 w-full justify-start p-3">
                            <button className="bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-md" onClick={handelSubmit}>Publish</button>
                            <button className="text-black bg-gray-300  hover:bg-gray-200 px-3 py-2 rounded-md" onClick={saveDraft}>Save Draft</button>
                        </div>
                        <button className="bg-red-600 hover:bg-red-500  m-3 px-2  text-2xl rounded-md" onClick={() => {
                            setContent({
                                headline: "",
                                content: "",
                                Tags: []
                            })
                        }} ><MdDelete /></button>

                    </div>
                </div>
            </div></section>
    )
}

export default New

