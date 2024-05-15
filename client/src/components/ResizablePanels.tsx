import { useCallback, useState } from "react";

interface ResizablePanelsProps {
    leftComponent: React.ComponentType<any>;
    rightComponent: React.ComponentType<any>;
}

const ResizablePanels: React.FC<ResizablePanelsProps> = ({ leftComponent: LeftComponent, rightComponent: RightComponent }) => {
    const [dividerPosition, setDividerPosition] = useState(55);
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (isDragging) {
            const newDividerPosition = (e.clientX / window.innerWidth) * 100;
            if (newDividerPosition > 10 && newDividerPosition < 90) {
                setDividerPosition(newDividerPosition);
            }
        }
    }, [isDragging]);

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    }, [handleMouseMove]);

    const startDragging = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }, [handleMouseMove, handleMouseUp]);

    return (
        <div className="flex w-full h-full select-none">
            <div style={{ width: `${dividerPosition}%` }} className="h-full bg-gray-200">
                <LeftComponent />
            </div>
            <div
                onMouseDown={startDragging}
                className="flex justify-center items-center cursor-col-resize bg-gray-400 w-2 h-full"
            >
                <div className="w-0.5 bg-black h-6"></div>
            </div>
            <div style={{ width: `${100 - dividerPosition}%` }} className="h-full bg-gray-300">
                <RightComponent />
            </div>
        </div>
    );
};

export default ResizablePanels;
