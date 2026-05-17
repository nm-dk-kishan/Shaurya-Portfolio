import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2>{name}</h2>
            </div>

            <div className="image-file-content bg-white h-full flex items-center justify-center p-5">
                {imageUrl && (
                    <img src={imageUrl} alt={name} className="max-w-full max-h-full object-contain" />
                )}
            </div>
        </>
    );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
