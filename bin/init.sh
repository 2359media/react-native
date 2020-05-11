#!/bin/bash
SCRIPT_PATH=`echo "$0" | sed "s/\/bin\/init.sh$//g"`
APP_NAME=$1
# STABLE=$2
[ $SCRIPT_PATH = "." ] && IS_SETUP=1 || IS_SETUP=0

# install repository
echo - Downloading react-native module
npx react-native init $APP_NAME

# open repository
cd $APP_NAME

# # commit original files
if [ $IS_SETUP = 0 ]; then
  git init
  git add --all
  git commit -m "Initial commit"
fi

# add modules
yarn add \
axios \
redux \
react-redux \
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

# add dev modules
yarn add --dev \
@types/jest \
husky \
lint-staged \
json-server

# install pod
cd ios
pod install
cd ..

# sync template
cd ..
rsync -a $SCRIPT_PATH/template/ $APP_NAME
if [ $IS_SETUP = 1 ]; then
  rm -r template
  mv $APP_NAME template
fi
