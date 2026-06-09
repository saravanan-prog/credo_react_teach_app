
import { useAuthor, useLang } from "../../core/hooks/customHook"


export default function DemoPage(){

   const author = useAuthor() 
   const content = useLang('ml')

   console.log('content===>',content)

   return <div>
        <div className="title">
            <h3> {content?.demoPage_lg} </h3>
            <p> {author} </p>
        </div>
   </div>
}