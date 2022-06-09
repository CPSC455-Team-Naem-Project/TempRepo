import NoteUploader from "./NoteUploader";
import Fileuploadsidebar from "./Fileuploadsidebar";

export default function Noteuploadpage({options} : any) {


    return(
        <div>
            <Fileuploadsidebar options={options}/>
            <NoteUploader/>
        </div>
    )

}
