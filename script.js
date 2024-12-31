document.addEventListener('DOMContentLoaded', () => {
    const joinButton = document.getElementById('joinButton');
    joinButton.addEventListener('click', () => {
        const inviteLink = 'https://discord.com/invite/example';
        alert('参加リンクにリダイレクトします: ' + inviteLink);
        window.location.href = inviteLink;
    });

    console.log('Script loaded successfully. All interactions are ready.');
});
