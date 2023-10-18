import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ArrayShuffler {
    public static void main(String[] args) {
        Integer[] arr = {1, 2, 3, 4, 5, 6, 7};

        List<Integer> list = new ArrayList<>(Arrays.asList(arr));

        Collections.shuffle(list);
        Integer[] shuffledArray = list.toArray(new Integer[0]);

        System.out.println("Shuffled Array: " + Arrays.toString(shuffledArray));
    }
}
