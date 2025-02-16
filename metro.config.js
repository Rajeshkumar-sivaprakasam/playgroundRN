import { getDefaultConfig, mergeConfig } from 'expo/metro-config'

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {}

module.exports = mergeConfig(getDefaultConfig(__dirname), config)
