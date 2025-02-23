export default function({type, placeholder}){
    return(
        <input 
        className="pl-6 pr-16 py-4 text-gray-300 w-full placeholder-gray-300 outline-none bg-transparent" 
        type={type}
        placeholder={placeholder} />
    );
}