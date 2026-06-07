export const BlinkingCircle = () => (
    <div className="relative flex items-center">
        <span className="absolute inline-flex size-2.5 animate-ping rounded-full bg-green-500" />
        <span className="relative inline-flex size-2.5 rounded-full bg-green-600" />
        <span className="sr-only">Online</span>
    </div>
);
