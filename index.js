// 実行用のExecコマンドを取得
const { exec } = require("child_process");

// スライドのURL
const slideURL =
  "https://docs.google.com/presentation/d/1GVagjzZfUDya7Wkn0Nuhcs4p-Wi1mKgIAvmnmfAlEpk/edit?usp=sharing";

// OS判定(Winだとwin32, Macだとdarwin, Linuxだとlinuxを返す)
const isWindows = process.platform === "win32";

// スライドを開く(windowsのみコマンドが違う)
if (isWindows) {
  exec(`start ${slideURL}`);
} else {
  exec(`open ${slideURL}`);
}
