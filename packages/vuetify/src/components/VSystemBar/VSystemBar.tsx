// Styles
import './VSystemBar.sass'

// Composables
import { makeBorderProps, useBorder } from '@/composables/border'
import { makeBorderRadiusProps, useBorderRadius } from '@/composables/border-radius'
import { makeDimensionProps, useDimension } from '@/composables/dimensions'
import { makeElevationProps, useElevation } from '@/composables/elevation'
import { makePositionProps, usePosition } from '@/composables/position'
import { makeTagProps } from '@/composables/tag'
import { useTheme } from '@/composables/theme'

// Utilities
import { defineComponent } from 'vue'
import makeProps from '@/util/makeProps'

export default defineComponent({
  name: 'VSystemBar',

  props: makeProps({
    lightsOut: Boolean,
    window: Boolean,
    ...makeBorderProps(),
    ...makeBorderRadiusProps(),
    ...makeDimensionProps(),
    ...makeElevationProps(),
    ...makePositionProps(),
    ...makeTagProps(),
  }),

  setup (props, { slots }) {
    const { themeClasses } = useTheme()
    const { borderClasses } = useBorder(props, 'v-system-bar')
    const { borderRadiusClasses } = useBorderRadius(props)
    const { dimensionStyles } = useDimension(props)
    const { elevationClasses } = useElevation(props)
    const { positionClasses, positionStyles } = usePosition(props, 'v-system-bar')

    return () => (
      <props.tag
        class={[
          {
            'v-system-bar': true,
            'v-system-bar--lights-out': props.lightsOut,
            'v-system-bar--window': props.window,
          },
          themeClasses.value,
          borderClasses.value,
          borderRadiusClasses.value,
          elevationClasses.value,
          positionClasses.value,
        ]}
        style={[
          dimensionStyles.value,
          positionStyles.value,
        ]}
        v-slots={ slots }
      />
    )
  },
})