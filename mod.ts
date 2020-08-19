/** Returns the path to the user's audio directory.
 *
 * The returned value depends on the operating system and is either a string,
 * containing a value from the following table, or `null`.
 * 
 * |Platform | Value              | Example                  |
 * | ------- | ------------------ | ------------------------ |
 * | Linux   | `XDG_MUSIC_DIR`    | /home/justjavac/Music    |
 * | macOS   | `$HOME`/Music      | /Users/justjavac/Music   |
 * | Windows | `{FOLDERID_Music}` | C:\Users\justjavac\Music |
 */
export default function audioDir(): string | null {
  switch (Deno.build.os) {
    case "linux": {
      return Deno.env.get("XDG_MUSIC_DIR") ?? null;
    }

    case "darwin": {
      const home = Deno.env.get("HOME");
      if (home) return `${home}/Music`;
      break;
    }

    case "windows":
      return Deno.env.get("FOLDERID_Music") ?? null;
  }

  return null;
}
