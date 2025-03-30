const API_KEY = 'AIzaSyCZ7QD3305A8Yii4N7MTDbhMArIMFMHibY'; // استبدل YOUR_API_KEY بمفتاح API الخاص بك
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', function() {
    const videoId = searchInput.value.trim();
    if (videoId) {
        fetchVideoData(videoId);
    }
});

function fetchVideoData(videoId) {
    fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet,contentDetails,statistics,status`)
        .then(response => response.json())
        .then(data => {
            if (data.items && data.items.length > 0) {
                const video = data.items[0];
                const videoTitle = video.snippet.title;
                const videoDescription = video.snippet.description;
                document.getElementById('video-title').innerText = videoTitle;
                document.getElementById('video-description').innerText = videoDescription;
                document.getElementById('video-player').src = `https://www.youtube.com/embed/${videoId}`;
            } else {
                alert('لم يتم العثور على فيديو.');
            }
        })
        .catch(error => console.error('Error:', error));
}

