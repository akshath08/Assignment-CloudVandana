public class PangramChecker {
    public static void main(String[] args) {
        String inputSentence = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = isPangram(inputSentence);
        
        if (isPangram) {
            System.out.println("The input sentence is a pangram.");
        } else {
            System.out.println("The input sentence is not a pangram.");
        }
    }

    public static boolean isPangram(String sentence) {
        boolean[] alphabetPresent = new boolean[26];
        
        sentence = sentence.toLowerCase();
        
        for (int i = 0; i < sentence.length(); i++) {
            char currentChar = sentence.charAt(i);
            if (currentChar >= 'a' && currentChar <= 'z') {
 
                alphabetPresent[currentChar - 'a'] = true;
            }
        }
        
        for (boolean present : alphabetPresent) {
            if (!present) {
                return false;
            }
        }
        
        return true;
    }
}
