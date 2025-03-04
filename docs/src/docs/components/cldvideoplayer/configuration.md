---
title: CldVideoPlayer/Configuration
order: 2
---

<script>
    import Callout from '$lib/components/Callout.svelte'
    import Video from '$lib/components/Video.svelte'
    import { CldVideoPlayer } from 'svelte-cloudinary'

</script>

# CldVideoPlayer Configuration

## General Props

| Prop Name          | Type           | Default         | Description                              | Example                      |
|--------------------|----------------|-----------------|------------------------------------------|------------------------------|
| autoPlay           | string         | `"never"`       | When, if, should the video automatically play. See `autoplayMode` in [Video Player docs](https://cloudinary.com/documentation/video_player_api_reference#constructor_parameters) | `"on-scroll"`          |
| className          | string         | -               | Additional class names added to the video container | `"my-video-player"`      |
| colors             | object         | See below       | Player chrome colors                     | See Colors Below             |
| controls           | boolean        | `true`          | Show player controls                     | `true`                       |
| fontFace           | string         | -               | Player UI font. Uses Google Fonts.       | `"Source Serif Pro"`         |
| height             | string/number  | -               | **Required**: Player height              | `1080`                       |
| id                 | string         | -               | Video instance ID, defaults to src value | `"my-video"`                 |
| logo               | boolean/object | See Below       | Logo to display in Player UI             | See Logo Below               |
| loop               | boolean        | `false`         | Loop the video                           | `true`                       |
| muted              | boolean        | `false`         | Load muted by default                    | `true`                       |
| onDataLoad         | Function       | -               | Triggered when video metadata is loaded  | See Events Below             |
| onError            | Function       | -               | Triggered on video error                 | See Events Below             |
| onMetadataLoad     | Function       | -               | Triggered when video data is loaded      | See Events Below             |
| onPause            | Function       | -               | Triggered on video pause                 | See Events Below             |
| onPlay             | Function       | -               | Triggered on video play                  | See Events Below             |
| onEnded            | Function       | -               | Triggered when video has ended play      | See Events Below             |
| showLogo           | boolea         | `true`          | Show the Cloudinary logo on Player       | `false`                      |
| src                | string         | -               | **Required**: Video public ID            | `"videos/my-video"`          |
| transformation     | object/array   | -               | Transformations to apply to the video    | `{ width: 200, height: 200, crop: 'fill' }` |
| version            | string         | `"1.9.4"`       | Cloudinary Video Player version          | `"1.9.4"`                    |
| width              | string/number  | -               | **Required**: Player width               | `1920`                       |

Missing an option from the [Video Player docs](https://cloudinary.com/documentation/video_player_api_reference) you'd like to see? [Create an issue](https://github.com/colbyfayock/next-cloudinary/issues/new?assignees=&labels=Type%3A+Feature&template=feature_request.md&title=%5BFeature%5D+)!

## Colors Prop

The `colors` prop takes an object that can control what colors are used in the player:

| Prop Name          | Type          | Default        | Description                              |
|--------------------|---------------|----------------|------------------------------------------|
| accent             | string        | `"#FF620C"`    | Seek bar, volume control and for highlighting interactions. |
| base               | string        | `"#000000"`    | Player controls bar, information bar, central play button, and right-click context menu. |
| text               | string        | `"#FFFFFF"`    | All the text and icons that are present within the video player UI. |

Learn more about the color scheme options and how they're used [on the Cloudinary docs](https://cloudinary.com/documentation/video_player_customization#color_scheme).

## Event Props

The event props allow you to pass in a function that is called whenever the associated event occurs.

For instance, in order to trigger an event whenever a video is paused:

```jsx
<CldVideoPlayer onPause={({ player }) => {
  const duration = player.duration();
}} ... />
```

## Logo Prop

The `logo` prop gives the option to customize the player's logo.

`logo` defaults to `true`, showing the Cloudinary logo and linking to https://cloudinary.com when clicked.

When `logo` is set to `false`, no logo will be displayed.

To customize the logo, the following options are available in the form of an object:

| Prop Name          | Type          | Default        | Description                              |
|--------------------|---------------|----------------|------------------------------------------|
| imageUrl           | string        | -              | Image URL for player logo.               |
| onClickUrl         | string        | -              | URL to browse to on logo click.          |

