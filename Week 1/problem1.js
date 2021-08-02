/*Problem 1: Given two Strings A and B. Find the length of the Longest Common Subsequence (LCS) of the given Strings. Input: A = Minneapolis, B = Minnesota.*/

function findLongestCommonSubstring(str1, str2){
    let stringA = str1.split('');
    let stringB = str2.split('');
     let commonStringLength = 0;
   
    for(let i = 0; i < stringA.length; i++){
            if(stringA[i] == stringB[i]){
              commonStringLength ++;
            }else if(stringA[i] != stringB[i]){
                return commonStringLength;
            }
    }
 }
 
 console.log(findLongestCommonSubstring('Minnesota', 'Minneaopolis')); //output = 5