export default function stringTruncate(str, length = 30) {
   var dots = str.length > length ? "..." : ""
   return str.substring(0, length) + dots
}
