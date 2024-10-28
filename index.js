console.log('button clicked');

var content = document.getElementsByClassName('default');
var theme = 0;

const changeTheme = () => {
    if (theme == 0) {
        theme = 1;
        content.className = 'dark';
    } else {
        theme = 0;
        content.className = 'default';
        
    }
} 