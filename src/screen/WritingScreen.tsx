import React, { useEffect, useRef, useState } from 'react';
import { Image, Pressable, ScrollView, StatusBar, View } from 'react-native';
import { Button, FAB, IconButton, Portal, Text } from 'react-native-paper';
import { theme } from '../MyTheme';
import { myStyle } from '../MyStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import PopBackButton from '../component/PopBackButton';
import { SketchCanvas } from '@sourcetoad/react-native-sketch-canvas';
import { allLetters, sketchColors } from '../constant';
import PrimaryButton from '../component/PrimaryButton';

export default function WritingScreen() {
  const canvas = useRef<any>(null);

  const letterKeys: string[] = Object.keys(allLetters);
  const [letters, setLetters] = useState<string[]>(['a']);
  const [letterIndex, setLetterIndex] = useState(0);

  const [displayBrushFabGroup, setDisplayBrushFabGroup] =
    useState<boolean>(false);

  const [displayPalette, setDisplayPalette] = useState<boolean>(false);

  const [brushSize, setBrushSize] = useState(4);

  const [brushColor, setBrushColor] = useState(sketchColors.pink);

  const changeBrushColor = (color: string) => {
    setBrushColor(color);
    setDisplayPalette(false);
  };

  const clearCanvas = () => {
    canvas.current?.clear();
  };

  useEffect(() => {
    const tempLetters = letterKeys.map((key) => allLetters[key]);
    setLetters([...tempLetters]);
  }, []);

  return (
    <>
      <StatusBar backgroundColor={theme.colors.rosePink} />
      <SafeAreaView style={myStyle.background}>
        <View
          style={{
            zIndex: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <PopBackButton />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center' }}>
              <PrimaryButton
                title="Previous Letter"
                action={() => {
                  console.log(letterIndex);
                  console.log((letterIndex - 1) % 26);

                  setLetterIndex((i) =>
                    (i - 1) % 26 >= 0
                      ? (i - 1) % 26
                      : 26 - Math.abs((i - 1) % 26)
                  );
                }}
              />
            </View>
            <View style={{ justifyContent: 'center' }}>
              <PrimaryButton
                title="Next Letter"
                action={() => setLetterIndex((i) => (i + 1) % 26)}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            borderBottomColor: '#000',
            borderBottomWidth: 2,
            marginTop: -60,
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 50 }}>{`${letters[
            letterIndex
          ].toUpperCase()} ${letters[letterIndex]}`}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <SketchCanvas
                ref={canvas}
                style={{ flex: 1 }}
                strokeColor={brushColor}
                strokeWidth={brushSize}
              />

              {!displayPalette && (
                <View
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                  }}
                >
                  <FAB
                    icon={'eraser'}
                    color={'#FFF'}
                    mode="flat"
                    style={{
                      position: 'absolute',
                      bottom: 150,
                      right: 10,
                      backgroundColor: theme.colors.rosePink,
                    }}
                    onPress={() => clearCanvas()}
                  />
                  {/* brush sizes */}
                  <FAB.Group
                    open={displayBrushFabGroup}
                    visible
                    style={{
                      position: 'absolute',
                      bottom: 72,
                      right: -5,
                      opacity: 1,
                    }}
                    theme={{
                      colors: {},
                    }}
                    fabStyle={{
                      shadowColor: 'transparent',
                      backgroundColor: theme.colors.rosePink,
                    }}
                    color="white"
                    icon={'grease-pencil'}
                    backdropColor="transparent"
                    actions={[
                      {
                        icon: () => (
                          <View>
                            <Image
                              source={require('../assets/icons/brush.png')}
                              style={{
                                width: '100%',
                                height: '50%',
                                marginTop: 6,
                              }}
                            />
                          </View>
                        ),
                        onPress: () => setBrushSize(10),
                      },
                      {
                        icon: () => (
                          <View>
                            <Image
                              source={require('../assets/icons/brush.png')}
                              style={{
                                width: '100%',
                                height: '40%',
                                marginTop: 7,
                              }}
                            />
                          </View>
                        ),
                        onPress: () => setBrushSize(7),
                      },
                      {
                        icon: () => (
                          <View>
                            <Image
                              source={require('../assets/icons/brush.png')}
                              style={{
                                width: '100%',
                                height: '30%',
                                marginTop: 8,
                              }}
                            />
                          </View>
                        ),
                        onPress: () => setBrushSize(4),
                      },
                    ]}
                    onStateChange={() =>
                      setDisplayBrushFabGroup(!displayBrushFabGroup)
                    }
                    onPress={() => {}}
                  ></FAB.Group>

                  {/* color palette */}
                  <FAB
                    icon="palette"
                    color="#FFF"
                    style={{
                      position: 'absolute',
                      bottom: 24,
                      right: 12,
                      backgroundColor: theme.colors.rosePink,
                    }}
                    mode="flat"
                    onPress={() => setDisplayPalette(true)}
                  />
                </View>
              )}
            </View>
          </View>
        </View>

        {displayPalette && (
          <View style={{ flex: 100, backgroundColor: 'green' }}>
            <Pressable
              onPress={() => setDisplayPalette(false)}
              style={{ backgroundColor: 'white', flex: 100 }}
            >
              <View></View>
            </Pressable>
            <ScrollView
              style={{
                position: 'absolute',
                bottom: 10,
                left: 20,
              }}
              horizontal
            >
              <IconButton
                icon={() => (
                  <Image source={require('../assets/icons/pink.png')} />
                )}
                onPress={() => changeBrushColor(sketchColors.pink)}
              />
              <IconButton
                icon={() => (
                  <Image source={require('../assets/icons/yellow.png')} />
                )}
                onPress={() => changeBrushColor(sketchColors.yellow)}
              />
              <IconButton
                icon={() => (
                  <Image source={require('../assets/icons/lightGreen.png')} />
                )}
                onPress={() => changeBrushColor(sketchColors.lightGreen)}
              />
              <IconButton
                icon={() => (
                  <Image source={require('../assets/icons/purple.png')} />
                )}
                onPress={() => changeBrushColor(sketchColors.purple)}
              />
              <IconButton
                icon={() => (
                  <Image source={require('../assets/icons/blue.png')} />
                )}
                onPress={() => changeBrushColor(sketchColors.blue)}
              />
              <IconButton
                icon={() => (
                  <Image source={require('../assets/icons/orange.png')} />
                )}
                onPress={() => changeBrushColor(sketchColors.orange)}
              />
              <IconButton
                icon={() => (
                  <Image source={require('../assets/icons/black.png')} />
                )}
                onPress={() => changeBrushColor(sketchColors.black)}
              />
              <IconButton
                icon={() => (
                  <Image source={require('../assets/icons/red.png')} />
                )}
                onPress={() => changeBrushColor(sketchColors.red)}
              />
              <IconButton
                icon={() => (
                  <Image source={require('../assets/icons/grey.png')} />
                )}
                onPress={() => {
                  changeBrushColor(sketchColors.grey);
                }}
              />
            </ScrollView>
          </View>
        )}
      </SafeAreaView>
    </>
  );
}
