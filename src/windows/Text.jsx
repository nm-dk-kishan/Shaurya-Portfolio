import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";


const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    const { name, image, subtitle, description } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{name}</h2>
            </div>

            <div className="text-file-content p-5 space-y-5 bg-white h-full">
                {image && (
                    <img src={image} alt={name} className="text-file-image" />
                )}

                {subtitle && <p className="text-file-subtitle">{subtitle}</p>}

                <div className="text-file-description">
                    {description && Array.isArray(description) ? (
                        description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))
                    ) : null}
                </div>
            </div>
        </>
    );
};

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
