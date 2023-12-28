export default function Image(props: any) {
    const { image_url } = props;

    return image_url ? <img alt="Img missing " src={image_url}/> : <img alt="Img missing " src={"https://raw.githubusercontent.com/OkayKenji/data/main/public/favicon.png"}/>;

}