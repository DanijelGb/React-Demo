export default function Button({label, onClickCallBack}) {

    return <input type="button" value={label} onClick={onClickCallBack}></input>
}