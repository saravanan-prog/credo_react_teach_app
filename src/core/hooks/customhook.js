import tamil from '../lang/tamil.json'
import malayalam from '../lang/malayalam.json'
import english from '../lang/en.json'



export function useAuthor(){

    return "Website Author : Mr.Saravanan Durai"
}

export function useLang(lang){

    if(lang=='tl')
        return tamil
    else if(lang == 'ml')
        return malayalam
    else 
        return english

}