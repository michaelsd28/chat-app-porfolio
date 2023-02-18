using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace chat_net.Controllers.FileHandler
{
    public class UploadFileController : Controller
    {
        // GET: UploadFileController
        public ActionResult Index()
        {
            return View();
        }

        // GET: UploadFileController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: UploadFileController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: UploadFileController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: UploadFileController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: UploadFileController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: UploadFileController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: UploadFileController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
