export default function IconFramer({ size = 32, className = "" }) {
    return (
        <svg width={size} height={size} viewBox="0 0 128 128" className={className}
        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.684 0h84.253v42.667H64.81L22.684 0Zm0 42.667H64.81l42.127 42.666H64.81V128L22.684 85.333V42.667Z"></path>
        </svg>
    );
}
