
export const Image_container =({url,style,name})=>{
    return (
        <img className={style} src={url} alt={name} />
    )
}