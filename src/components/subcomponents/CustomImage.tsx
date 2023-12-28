import "../Launch.css";
export default function CustomImage(props: any) {
    const { image_url, className } = props;

    return image_url ? <img alt="Img missing " className={className} src={image_url}/> : <img alt="Img missing " className={className} src={"https://raw.githubusercontent.com/OkayKenji/data/main/public/favicon.png"}/>;

}