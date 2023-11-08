
export let name = 'Samuel';
export const age: number = 7;
export const isValid: boolean = true;

name = 'Daniel';

export const templateString = `Esto es un string
multinlínea
que puede tener
" dobles 
'simples
inyectar valores \$ ${ name} 
expresiones ${ 1 + 1 }
números: ${age}
booleanos: ${isValid}`

console.log(templateString);