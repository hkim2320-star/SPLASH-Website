/* SWIM LESSONS PAGE JS */

$(document).ready(function () {

  const lessons = [
    {
      name: "Private Swim Lessons",
      ages: "6 months – adult",
      format: "1-on-1",
      note: "Our private swim lessons provide one-on-one instruction for students ages three months through adult. Private swim lessons are the best option for accelerated learning. Each lesson will allow our instructors to build on the momentum and skills taught in the previous lesson with minimal downtime. From the basics of putting your face into the water to refining your stroke technique, private lessons will offer the highest rate of progress. "
    },
    {
      name: "Semi-Private Swim Lessons",
      ages: "2.5 – 13",
      format: "2 students",
      note: "At Splashes, our semi-private swim lessons offer students ages 2.5 to 13 the opportunity to interact with another student of a similar age and ability while still receiving personal attention. Whether you would like us to pair your child with another student of similar age and ability or would like to take lessons with a friend or sibling, our semi-private lessons are a cost effective option. Students also have the opportunity to observe one another in the lesson. "
    },
    {
      name: "Parent & Me Lessons",
      ages: "3 months – 3 years",
      format: "Parent + child",
      note: "Our Parent and Me swimming lessons (also known as “Mommy and Me” or “Daddy and Me” classes) gives parents the opportunity to be hands-on with their little one while our instructors facilitate the learning process between you and your child. These lessons provide a fun and relaxed environment for you and your child in the water. Children ages 3 months through 3 years of age can participate. However, we encourage children ages 2.5 and older to participate in private or semi-private swim lessons. "
    },
    {
      name: "Stroke Clinic",
      ages: "5+ (Level 8+ recommended)",
      format: "Group clinic",
      note: "Splashes Stroke Clinics give students the opportunity to advance their swimming techniques while in a group setting. Our Stroke Clinic classes place emphasis on proper technique over speed and prepare students for swim team. Swimmers ages 5 and older who are level 8 or higher can benefit from participating in these 40 minute classes. A strong technical foundation will ensure that students’ progress much faster when the time comes for them to work on speed. Our stroke clinics are exciting and fast paced, where each student will receive a great workout."
    },
    {
      name: "Adult Swim Lessons",
      ages: "13+",
      format: "Beginner – advanced",
      note: "It is never too late to learn how to swim! Whether you are looking to learn the basics or improve your technique to use swimming as a form of exercise, our trained instructors will tailor each lesson to fit your individual needs. At Splashes, our adult lessons are geared for swimmers ages 13 and older. From beginners to advanced, our adult swimming lessons are a great option for those looking to conquer their fear of the water or who are looking to become stronger swimmers. "
    }
  ];


  let tableHTML = `
    <div class="table-responsive">
      <table class="table table-striped table-hover align-middle">
        <thead class="table-dark">
          <tr>
            <th>Lesson</th>
            <th>Ages</th>
            <th>Format</th>
            <th class="text-end">Details</th>
          </tr>
        </thead>
        <tbody>
  `;


  lessons.forEach((item, index) => {
    tableHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.ages}</td>
        <td>${item.format}</td>
        <td class="text-end">
          <button class="btn btn-primary btn-sm learn-more" data-index="${index}">Learn More</button>
        </td>
      </tr>
    `;
  });

  tableHTML += `
        </tbody>
      </table>
    </div>
  `;

  $("#lessonTableWrap").html(tableHTML);

  $(document).on("click", ".learn-more", function () {
    const idx = $(this).data("index");
    const lesson = lessons[idx];

    $("#lessonModalLabel").text(lesson.name);
    $("#lessonModalBody").html(`
      <p><strong>Ages:</strong> ${lesson.ages}</p>
      <p><strong>Format:</strong> ${lesson.format}</p>
      <p>${lesson.note}</p>
    `);

    const modal = new bootstrap.Modal(document.getElementById("lessonModal"));
    modal.show();

  });
});


/* LOCATIONS PAGE JS AJAX */
if ($('#locationsWrap').length) {
    $.getJSON('data/locations.json', function(regions) {
        let html = "";
        regions.forEach(function (group) {
            html += `
            <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
                <div class="location-card h-100">
                    <h5 class="fw-bold mb-3">${group.region}</h5>
                    <ul class="list-unstyled mb-0">
                        `;
                        group.items.forEach(function (loc) {
                            html += `
                                <li class="mb-2">
                                <a class="location-link" href="${loc.url}">${loc.name}</a>
                                </li>
                            `;
                        });
                        html += `
                    </ul>
                </div>
            </div>
            `;
        });
        $('#locationsWrap').html(html);
        }).fail(function() {
            $('#locationsWrap').html("<p class='text-danger'>Failed to load locations data.</p>");
        });
}