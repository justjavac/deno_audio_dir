# deno_audio_dir

[![tag](https://img.shields.io/github/release/justjavac/deno_audio_dir)](https://github.com/justjavac/deno_audio_dir/releases)
[![Build Status](https://github.com/justjavac/deno_audio_dir/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_audio_dir/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_audio_dir)](https://github.com/justjavac/deno_audio_dir/blob/master/LICENSE)
[![](https://img.shields.io/badge/deno-v1.3-green.svg)](https://github.com/denoland/deno)

Returns the path to the user's audio directory.

The returned value depends on the operating system and is either a string,
containing a value from the following table, or `null`.

|Platform | Value              | Example                  |
| ------- | ------------------ | ------------------------ |
| Linux   | `XDG_MUSIC_DIR`    | /home/justjavac/Music    |
| macOS   | `$HOME`/Music      | /Users/justjavac/Music   |
| Windows | `{FOLDERID_Music}` | C:\Users\justjavac\Music |

## Usage

Requires `allow-env` permission.

Returns `null` if there is no applicable directory or if any other error occurs.

```ts
import audioDir from "https://deno.land/x/audio_dir/mod.ts";

audioDir();
// Lin: "/home/justjavac/Music"
// Mac: "/Users/justjavac/Music"
// Win: "C:\Users\justjavac\Music"
```

## License

[deno_audio_dir](https://github.com/justjavac/deno_audio_dir) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
