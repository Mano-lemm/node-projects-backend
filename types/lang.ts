export function fromOrdinal(ord: number): string{
    if(ord == 0){
	return "java";
    }
    if(ord == 1){
	return "cpp";
    }
    if(ord == 2){
	return "javascript";
    }
    if(ord == 3){
	return "python";
    }
    return "mismatch";
}


export function toOrdinal(name: string): number {
    if(name == "java"){
	return 0;
    }
    if(name == "cpp"){
	return 1;
    }
    if(name == "javascript"){
	return 2;
    }
    if(name == "python"){
	return 3;
    }
    return -1;
}
