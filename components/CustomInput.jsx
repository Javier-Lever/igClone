export default function({type, placeholder, value, callback, required=false}){
    return(
        <input 
        className="pl-6 pr-16 py-4 text-gray-300 w-full placeholder-gray-300 outline-none bg-transparent" 
        required={required}
        type={type}
        placeholder={placeholder} 
        value={value}
        onChange={ event => callback(event.target.value)}/>
    );
}
