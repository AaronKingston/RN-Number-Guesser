import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 24,
    padding: 16,
    marginTop: deviceWidth < 350 ? 18 : 36,
    backgroundColor: Colors.primary800,

    //android only shadow property below
    elevation: 8,

    //iphone only shadow properties below
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,

    //
  },
});
