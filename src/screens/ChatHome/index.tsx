import { View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import MainHeader from "../../components/sections/MainHeader"
import MainFeed from "../../components/sections/MainFeed"
import SChatHome from "./ChatHome.styles"


/**
 * Notes:
 * Layout wrapper component within component themselves
 * so that border can extend to bounds of viewport
 * 
 * @returns JSX
 */
const ChatHome = () => {
  const insets = useSafeAreaInsets();

  return (
    <View 
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom = 20,
        paddingLeft: insets.left,
        paddingRight: insets.right
      }}
    >
      <MainHeader />
      <MainFeed />
    </View>
  )
}

export default ChatHome;