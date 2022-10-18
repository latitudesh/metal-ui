function getInitials(t,e="?"){return t&&"string"==typeof t?t.replace(/\s+/," ").split(" ").slice(0,2).map(t=>t&&t[0].toUpperCase()).join(""):e}export{getInitials as default};
