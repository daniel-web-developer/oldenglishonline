(()=>{function t(t,e){t&&e&&$.getJSON(`data/${e}?cache=`+Date.now()).done(function(e){t.empty();let n=[];for(let t=0;t<5;t++){let t=e.splice(Math.random()*e.length|0,1);n.push(t[0])}n.forEach(function(e){let n=e.question.split("####"),a=`<span class="question-line">${n[0]}</span>\n                                    <input type="text" class="user-input form-control" placeholder="answer">\n                                    <span class="question-line">${n[1]}</span>`,s=`<div class="question-item form-group">\n                        <div class="question" data-answer="${e.correctAnswer}">\n                            ${a}\n                        </div>\n                        <div class="common-mistakes hidden">\n                            ${function(t){let e="";return t.forEach(function(t){e+=`<div class="answer hidden" data-answer="${t.incorrectAnswer}">${t.explanation}</div>`}),e}(e.commonMistakes)}\n                        </div>\n                        <div class="answer generic hidden">\n                            ${e.explanation}\n                        </div>\n                    </div>`;t.append(s)})}).fail(function(t,e,n){console.log(e,n)})}function e(t,e){let n=!1;return t.forEach(function(t){t.toUpperCase()==e.toUpperCase()&&(n=!0)}),n}function n(t,e){t&&e&&(t.empty(),$.getJSON(`data/${e}`).then(e=>{const n=e.splice(Math.random()*e.length|0,1)[0],a=$('<table class="quiz-table table-striped"/>');a.append(`<tr><th colspan="${n.headerRow.length}"><strong> ${n.word} </strong></th></tr>`);let s="";s+="<tr>",n.headerRow.forEach(t=>{s+=`<td><strong>${t}</strong></td>`}),s+="</tr>\n",n.rows.forEach(t=>{s+='<tr class="quiz-table-line">',t.forEach((t,e)=>{s+=0===e?`<th><strong>${t}</strong></th>`:`<td><input type="text" class="user-input form-control" placeholder="answer" data-answer="${t}"></td>`}),s+="</tr>"}),a.append(s),t.append(a),$("small").replaceWith("<small>In the table below, fill out the fully declined version of the word in the header.</small>"),$("#submit").replaceWith('<button class="solid-button button" id="table-submit">Submit</button>'),$("#again").replaceWith('<button class="solid-button button hidden" id="table-try-again">Try Again?</button>')}))}$(document).ready(function(){let a,s=$("#question-wrapper");const i=$("#question-wrapper");let o=i.data("question-file");t(i,o),$(".special-character").on("click",function(t){t.preventDefault(),a&&a.val(a.val()+$(this).attr("data-char")).focus()}),s.on("focus","input",function(){a=$(this)}),$(".audio-button").on("click",function(){$(this).next(".audio-link").get(0).play()}),$("#additionalbutton").on("click",function(){t($("#question-wrapper"),$(this).data("new-questions")),$(this).removeClass("light-button").addClass("solid-button"),$("#basicbutton").removeClass("solid-button").addClass("light-button active"),$("#again").data("new-questions")}),$("#basicbutton").on("click",function(){t($("#question-wrapper"),$(this).data("new-questions")),$(this).removeClass("light-button").addClass("solid-button"),$("#additionalbutton").removeClass("solid-button").addClass("light-button active"),$("#again").data("new-questions")}),$("#hide-submit").on("click",function(){$(".table-hide").toggle(),$(this).find("span").toggleClass("hide")}),$(".tooltip-header").each(function(){$(this).on("click",function(){$(this).closest(".grammar-tooltip").siblings(".grammar-tooltip").find(".card-body").addClass("hide"),$(this).next(".card-body").toggleClass("hide")})}),$("#submit").on("click",function(t){t.preventDefault(),$(this).addClass("hidden"),$("#again").removeClass("hidden"),$(".question").each(function(){let t=$(this).attr("data-answer").split("|"),n=$(this).find("input").val().trim(),a=e(t,n),s=null;a||$(this).siblings(".common-mistakes").find(".answer").each(function(){e([$(this).attr("data-answer")],n)&&(s=$(this))}),a?$(this).closest(".form-group").addClass("has-success").removeClass("has-error"):$(this).closest(".form-group").removeClass("has-success").addClass("has-error"),null!=s?s.removeClass("hidden").parent().removeClass("hidden"):$(this).siblings(".answer").removeClass("hidden")})}),$("#again").on("click",function(e){e.preventDefault();const n=$("#question-wrapper");let a;a=$("#additionalbutton").hasClass("active")?$("#additionalbutton").data("new-questions"):n.data("question-file"),$(this).addClass("hidden"),$("#submit").removeClass("hidden"),t(n,a)}),$("#questionnaire-button").on("click",function(e){e.preventDefault();const n=$("#question-wrapper");let a=n.data("question-file");$(this).removeClass("light-button").addClass("solid-button"),$("#table-quiz-button").removeClass("solid-button").addClass("light-button"),t(n,a),$("small").replaceWith("<small>In the textboxes below, fill out the fully declined version of the word in brackets.</small>"),$("#table-submit").replaceWith('<button class="solid-button button" id="submit">Check</button>'),$("#table-try-again").replaceWith('<button class="solid-button button hidden" id="again">Try Again?</button>')}),$("#table-quiz-button").on("click",function(t){t.preventDefault();const e=$("#question-wrapper");let a=e.data("table-file");$(this).removeClass("light-button").addClass("solid-button"),$("#questionnaire-button").removeClass("solid-button").addClass("light-button"),n(e,a),$("small").replaceWith("<small>In the table below, fill out the fully declined version of the word in the header</small>"),$("#submit").replaceWith('<button class="solid-button button" id="table-submit">Check</button>'),$("#again").replaceWith('<button class="solid-button button hidden" id="table-try-again">Try Again?</button>')}),$(".test-container").on("click","#table-submit",function(t){t.preventDefault(),$(".user-input").each(function(){e($(this).attr("data-answer").split("|"),$(this).val().trim())?$(this).addClass("table-success").removeClass("table-error"):$(this).removeClass("table-success").addClass("table-error")}),$(this).addClass("hidden"),$("#table-try-again").removeClass("hidden")}),$(".test-container").on("click","#table-try-again",function(t){t.preventDefault();const e=$("#question-wrapper");let a=e.data("table-file");$(this).addClass("hidden"),$("#table-submit").removeClass("hidden"),n(e,a)})})})();