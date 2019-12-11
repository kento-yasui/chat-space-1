$(function(){
  function buildHTML(message){
      var body = message.content ? `${message.content}` : "";
      var image = message.image_url ? `<img src="${message.image_url}">` : ""
      var html = `<div class="message">
                    <div class="message__info">
                      <p class="message__info__talker">
                        ${message.user_name}
                      </p>
                      <p class="message__info__date">
                        ${message.created_at}
                      </p>
                    </div>
                      <p class="message__text">
                        ${message.content}
                      </p>
                      ${image}
                    </div>`
    return html
  }
  $("#new_message").on("submit", function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
  })
})