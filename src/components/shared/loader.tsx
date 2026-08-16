export const Loader = () => (
    <div className="flex h-full flex-col items-center justify-center">
        <div className="flex flex-row gap-2">
            <div className="size-3 animate-bounce rounded-full bg-primary" />
            <div className="size-3 animate-bounce rounded-full bg-primary [animation-delay:-.3s]" />
            <div className="size-3 animate-bounce rounded-full bg-primary [animation-delay:-.5s]" />
        </div>
    </div>
);
