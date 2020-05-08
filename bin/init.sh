# install repository
echo Downloading react-native module...
npx react-native init $1

# open repository
cd $1

# commit original files
git init
git add --all
git commit -m "Initial commit"

# add packages
yarn add \
axios \
redux \
react-redux \
redux-saga \
redux-persist \
@react-native-community/async-storage \
@react-navigation/native \
react-native-reanimated \
react-native-gesture-handler \
react-native-screens \
react-native-safe-area-context \
@react-native-community/masked-view \
@react-navigation/stack \
@react-navigation/bottom-tabs

yarn add --dev \
@types/jest \
husky \
lint-staged

cd ios
pod install
cd ..
