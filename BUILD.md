# Build Debug APK

Make sure you already have this directory:

```
android/app/src/main/assets/
```

If it's not there, create it. After that create an empty new file and save it as `index.android.bundle` and put your file in like this:

```
android/app/src/main/assets/index.android.bundle
```

Afterwards, run this command line in the root directory of your project:

```
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```

And then:

```
cd android && ./gradlew assembleDebug
```