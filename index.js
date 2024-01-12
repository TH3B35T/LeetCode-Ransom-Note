/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let skippedChars = {};

        for (let i = 0; i < ransomNote.length; i++) {
            let char = ransomNote[i];

            if (!magazine.includes(char)) {
                return false;
            } else if (char in skippedChars) {
                let charCountInSkippedChars = skippedChars[char];

                if (charCountInSkippedChars > 1) {
                    skippedChars[char] = charCountInSkippedChars - 1;
                } else {
                    return false;
                }
            } else {
                let charCount = magazine.split(char).length - 1;
                skippedChars[char] = charCount;
            }
        }

        return true;
    
};
